# Simple Magic: The Gathering API

this magic api is used to supply modern legal card images to the magic mode in my hangman game. 

Models/Crud Methods
---------
- Cards
  - Create
  - Read
  - Update
  - Delete
- Sets
  - Create
  - Read
  - Update
- Types
  - Create
  - Read
  - Update
  
Features/Uses
---------
- find all modern cards  ```api/cards```
- find random cards ```api/cards/random```
- find cards by id ```api/cards/id=#```
- find cards by name ```api/cards/CARDNAME-HERE```
- create new cards ```api/cards/newcard```
- update cards by id ```api/cards/update&id=#```
- delete cards ```/delete&id=#```
------------------
- find all modern sets ```api/sets```
- find sets by id ```api/sets/id=#```
- find sets by name ```api/sets/SETNAME-HERE```
- update sets by id ```api/sets/update&id=#```
- create new sets ```api/sets/newset```
-------------------
- find all types ```api/types```
- find types by name ```api/types/TYPENAME-HERE```
- create new types ```api/types/newtype```
- update sets ```api/types/update&id=#```

Future Implementations
------
- [ ] Magic Rules
- [ ] Subtypes/Supertypes
