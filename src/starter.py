import os
import logging
import sys
import os.path
from llama_index.core import (
    VectorStoreIndex,
    SimpleDirectoryReader,
    StorageContext,
    load_index_from_storage,
)

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

current_path = os.getcwd()
print("Current path:", current_path)
if os.path.exists(os.path.join(current_path, "data/1")):
  print("The './data/1' folder exists in the current path.")
else:
  print("The './data/1' folder does NOT exist in the current path.")

# check if storage already exists
PERSIST_DIR = "./indexes/vector-store"
if not os.path.exists(PERSIST_DIR):
    # load the documents and create the index
    documents = SimpleDirectoryReader("./data/1").load_data()
    index = VectorStoreIndex.from_documents(documents)
    # store it for later
    index.storage_context.persist(persist_dir=PERSIST_DIR)
else:
    # load the existing index
    storage_context = StorageContext.from_defaults(persist_dir=PERSIST_DIR)
    index = load_index_from_storage(storage_context)

query_engine = index.as_query_engine()

print("----------------")
response = query_engine.query("What did the author do growing up?")
print(response)
