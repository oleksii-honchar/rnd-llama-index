from pathlib import Path
import requests

wiki_titles = ["Toronto", "Seattle", "San Francisco", "Chicago", "Boston", "Washington, D.C.", "Cambridge, Massachusetts", "Houston"]

for title in wiki_titles:
    response = requests.get(
        'https://en.wikipedia.org/w/api.php',
        params={
            'action': 'query',
            'format': 'json',
            'titles': title,
            'prop': 'extracts',
            'explaintext': True,
        }
    ).json()
    page = next(iter(response['query']['pages'].values()))
    wiki_text = page['extract']


    data_path = Path('data/milvus')
    if not data_path.exists():
        Path.mkdir(data_path)


    with open(data_path / f"{title}.txt", 'w') as fp:
        fp.write(wiki_text)