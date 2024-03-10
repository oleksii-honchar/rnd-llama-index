import os
import logging
import sys
import os.path

from milvus import default_server
from pymilvus import (Collection, connections)

from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.core.query_engine import CitationQueryEngine
from llama_index.vector_stores.milvus import MilvusVectorStore
from llama_index.llms.openai import OpenAI
from llama_index.core import (
    VectorStoreIndex,
    SimpleDirectoryReader,
    StorageContext,
    Settings
)
from dotenv import load_dotenv

load_dotenv('./project.env')

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

current_path = os.getcwd()
print("Current path:", current_path)

default_server.start()

vector_store = MilvusVectorStore(
    collection_name="citations",
    dim=1536,
    host="127.0.0.1",
    port=default_server.listen_port
)

Settings.llm=OpenAI(model="gpt-3.5-turbo", temperature=0)
Settings.embed_model = OpenAIEmbedding(
    model="text-embedding-3-small", embed_batch_size=100
)

storage_context = StorageContext.from_defaults(vector_store=vector_store)

print("[Milvus] connecting to server")
connections.connect(host="127.0.0.1", port=default_server.listen_port)
print("[Milvus] connected")

collection = Collection("citations")
print("Collection is empty:", collection.is_empty)
print("Collection entites count:", collection.num_entities)

# documents = SimpleDirectoryReader("./data/milvus").load_data()
# index = VectorStoreIndex.from_documents(
#   documents, 
#   storage_context=storage_context,
# )
try:
  index = VectorStoreIndex.from_vector_store(
    vector_store, storage_context=storage_context
  )
except ValueError:
  print("No index found! Exiting..")
  sys.exit(1)

query_engine = CitationQueryEngine.from_args(
    index,
    similarity_top_k=3,
    citation_chunk_size=100,
)
response = query_engine.query("Does Seattle or Houston have a bigger airport?")
print(response)
print([attr for attr in dir(response) if not attr.startswith('__')])
for i, source in enumerate(response.source_nodes):
  if i >= 5:
    break
  print(source.node.get_text())
