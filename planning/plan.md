# Plan layout

- pull most/all data from scryfall-default(in project folder because github doesn't like large files)
- cut away excess data, such as web links
- sort by set to eliminate duplicates, and reduce API size

Models/CRUD methods
-------------

Magic Cards
- [x] name: string
- [x] img: string
- [x] color(s)
- [x] set: set ref
- [x] CRUD methods
    - [x] Create
    - [x] Read
    - [x] Update
    - [x] Delete

Types
- [x] name: string
- [x] Permanent: Boolean
- [x] CRUD methods
    - [x] Create
    - [x] Read
    - [x] Update

Sets
- [x] name
- [x] abbreviation
- [x] set type
- [x] CRUD methods
    - [x] Create
    - [x] Read
    - [x] Update
