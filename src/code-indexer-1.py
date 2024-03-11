import os
import logging
import sys
import os.path
from chromadb import chromadb
from chromadb.config import Settings as ChromaSettings
from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.llms.openai import OpenAI
from llama_index.core.query_engine import CitationQueryEngine
from llama_index.vector_stores.chroma import ChromaVectorStore
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

Settings.llm=OpenAI(model="gpt-3.5-turbo", temperature=0)
Settings.embed_model = OpenAIEmbedding(
    model="text-embedding-3-small", embed_batch_size=100
)

chroma_client = chromadb.PersistentClient(
  path="./indexes/chromadb-code-index-1", 
  settings=ChromaSettings(anonymized_telemetry=False),
)

chroma_collection = chroma_client.get_or_create_collection("code-index-1")

vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
storage_context = StorageContext.from_defaults(vector_store=vector_store)

if chroma_collection.count() == 0:
  print("The collection is empty.")
  documents = SimpleDirectoryReader(
    input_dir="./data/code-sample-1",
    recursive=True
  ).load_data()
  index = VectorStoreIndex.from_documents(
    documents, storage_context=storage_context
  )
else:
  print("Loading processed data.")
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
    citation_chunk_size=512,
)

print("----------------")

response = query_engine.query("How colors are inferred in MDTailwindThemeJson?")
print(response)

for i, source in enumerate(response.source_nodes):
  if i >= 5:
    break
  print(source.node.get_text())