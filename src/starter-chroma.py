import os
import logging
import sys
import os.path
from chromadb import chromadb, Settings
from llama_index.vector_stores.chroma import ChromaVectorStore
from llama_index.core import (
    VectorStoreIndex,
    SimpleDirectoryReader,
    StorageContext,
)
from dotenv import load_dotenv

load_dotenv('./project.env')

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

current_path = os.getcwd()
print("Current path:", current_path)
if os.path.exists(os.path.join(current_path, "data")):
  print("The './data' folder exists in the current path.")
else:
  print("The './data' folder does NOT exist in the current path.")

chroma_client = chromadb.PersistentClient(path="./indexes/chromadb", settings=Settings(
    anonymized_telemetry=False
))

chroma_collection = chroma_client.get_or_create_collection("quickstart")

vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
storage_context = StorageContext.from_defaults(vector_store=vector_store)

if chroma_collection.count() == 0:
  print("The collection is empty.")
  documents = SimpleDirectoryReader("./data/1").load_data()
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

query_engine = index.as_query_engine()

print("----------------")
response = query_engine.query("What did the author do growing up?")
print(response)
