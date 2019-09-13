# Plan layout

- pull most/all data from scryfall-default(on desktop because github doesn't like large files)
- cut away excess data, such as web links
- sort by set to eliminate duplicates, and reduce API size

Models/CRUD methods
-------------

Magic Cards
- [ ] name: string
- [ ] img: string
- [ ] card text: string
- [ ] color(s): [color reference]
- [ ] type(s): [types reference]

- [ ] CRUD methods
    - [ ] Create
    - [ ] Read
    - [ ] Update
    - [ ] Delete

Types
- [ ] name: string
- [ ] Permanent: Boolean
- [ ] CRUD methods
    - [ ] Create
    - [ ] Read
    - [ ] Update

Colors
- [ ] name: string
- [ ] themes: array
- [ ] attributedAbilites: array
- [ ] CRUD methods
    - [ ] Read
    - [ ] Update

Sets
- [ ] name
- [ ] mechanics
- [ ] theme
- [ ] CRUD methods
    - [ ] Create
    - [ ] Read
    - [ ] Update
