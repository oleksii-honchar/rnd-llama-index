import sys
sys.path.insert(0, './src/code-indexer-loop')

import os
import logging
import os.path
from dotenv import load_dotenv
from llama_index.core.query_engine import CitationQueryEngine

from api import CodeIndexer

load_dotenv('./project.env')

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

current_path = os.getcwd()
print("Current path:", current_path)

indexer = CodeIndexer(src_dir="./data/code-sample-1", watch=False)

query_engine = CitationQueryEngine.from_args(
    indexer.index,
    similarity_top_k=3,
    citation_chunk_size=512,
)

print("----------------")

response = query_engine.query("Provide source code of MDTailwindThemeJson inferring colors")
print(response)

for i, source in enumerate(response.source_nodes):
  if i >= 5:
    break
  print(source.node.get_text())