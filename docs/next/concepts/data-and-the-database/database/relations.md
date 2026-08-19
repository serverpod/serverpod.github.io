# Relations

https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relations

A relation links rows in one table to rows in another through a foreign key, and the database keeps the link consistent. This is the alternative to embedding a model as a [`json` column](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/tables.md#data-representation): related data lives in its own table, can be queried on its own, and is never duplicated per row.

Relations are declared in the model file with the `relation` keyword. There are two forms:

- An **object relation** types the field as the related model, e.g. `address: Address?, relation`. The related object can be fetched together with the row through [relation queries](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relation-queries.md).
- An **id relation** stores only the foreign key, e.g. `addressId: int, relation(parent=address)`. You read and set the id yourself, and nothing else is fetched.

## Choose a relation shape

| Shape                                                                                                                  | Use when                                                             | Example on the page                            |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------- |
| [One-to-one](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relations/one-to-one.md)          | A row pairs with at most one row of the other table.                 | A `User` with one `Address`.                   |
| [One-to-many](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relations/one-to-many.md)        | One row owns any number of related rows.                             | A `Company` with many `Employee` rows.         |
| [Many-to-many](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relations/many-to-many.md)      | Rows on both sides connect freely, through a junction table.         | `Student` and `Course` joined by `Enrollment`. |
| [Self-relations](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relations/self-relations.md)  | Rows relate to rows in the same table.                               | A `Cat` linking to its mother and kittens.     |
| [Relations with modules](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relations/modules.md) | Your tables relate to a module's tables, such as the signed-in user. | A `UserProfile` attached to an `AuthUser`.     |

Whatever the shape, [Referential actions](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relations/referential-actions.md) control what happens to related rows when the row they point to is deleted or its id changes, and [Deferrable constraints](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relations/deferrable-constraints.md) control when the foreign key is checked.

## Related

- [Relation queries](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/relation-queries.md): fetch, attach, and detach related rows.
- [Filtering](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/filtering.md#relation-operations): filter on related rows, such as their count or contents.
- [Tables](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/tables.md): how models map to tables in the first place.
