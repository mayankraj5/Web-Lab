#!/usr/bin/env python
# coding: utf-8

# In[1]:


get_ipython().system('pip install rdflib')


# In[2]:


get_ipython().system('pip install SPARQLWrapper')


# In[3]:


from rdflib import Graph
from SPARQLWrapper import SPARQLWrapper,JSON,N3
from pprint import pprint


# In[4]:


sparql = SPARQLWrapper('https://dbpedia.org/sparql')
sparql.setQuery('''
    SELECT ?object
    WHERE { dbr:Barack_Obama rdfs:label ?object .}
    # WHERE { dbr:Barack_Obama dbo:abstract ?object .}
''')
sparql.setReturnFormat(JSON)
qres = sparql.query().convert()

# pprint(qres)
for result in qres['results']['bindings']:
    # print(result['object'])
    
    lang, value = result['object']['xml:lang'], result['object']['value']
    print(f'Lang: {lang}\tValue: {value}')
    # if lang == 'en':
        # print(value)


# In[6]:


sparql = SPARQLWrapper("http://dbpedia.org/sparql")
sparql.setQuery('''
CONSTRUCT { dbc:Machine_learning skos:broader ?parent .
            dbc:Machine_learning skos:narrower ?child .} 
WHERE {
    { dbc:Machine_learning skos:broader ?parent . }
UNION
    { ?child skos:broader dbc:Machine_learning . }
}''')

sparql.setReturnFormat(N3)
qres = sparql.query().convert()

g = Graph()
g.parse(data=qres, format='n3')
print(g.serialize(format='ttl'))


# In[37]:


import io
from IPython.display import display
from io import BytesIO
from PIL import Image
import requests

sparql = SPARQLWrapper('https://dbpedia.org/sparql')

instruments = ['Trombone', 'Viola','Drum', 'Saxophone','Pan_flute']

for Musical_instrument in instruments:
    print('###########################################')
    sparql.setQuery(f'''
    SELECT ?name ?comment ?image
    WHERE {{ dbr:{Musical_instrument} rdfs:label ?name.
             dbr:{Musical_instrument} rdfs:comment ?comment.
             dbr:{Musical_instrument} dbo:thumbnail ?image.
    
        FILTER (lang(?name) = 'en')
        FILTER (lang(?comment) = 'en')
    }}''')

    sparql.setReturnFormat(JSON)
    qres = sparql.query().convert()
    
    result = qres['results']['bindings'][0]
    name, comment, image_url = result['name']['value'], result['comment']['value'], result['image']['value']

    print(name)
    response = requests.get(image_url)
    display(Image.open(BytesIO(response.content)))
    print(f'{comment}...')


# In[ ]:





# In[ ]:




