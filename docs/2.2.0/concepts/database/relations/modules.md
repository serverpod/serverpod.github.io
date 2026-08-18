# Relations with modules

https://docs.serverpod.dev/2.2.0/concepts/database/relations/modules

Serverpod [modules](https://docs.serverpod.dev/2.2.0/concepts/modules.md) usually come with predefined tables and data structures. Sometimes it can be useful to extend them with your data structures by creating a relation to the module tables. Relations to modules come with some restrictions since you do not own the definition of the table, you cannot change the table structure of a module table.

Since you do not directly control the models inside the modules it is recommended to create a so-called "bridge" table/model linking the module's model to your own. This can be done in the same way we normally would setup a one-to-one relation.

```yaml
class: User
table: user
fields:
  userInfo: module:auth:UserInfo?, relation
  age: int
indexes:
  user_info_id_unique_idx:
    fields: userInfoId
    unique: true
```

Or by referencing the table name if you only want to access the id.

```yaml
class: User
table: user
fields:
  userInfoId: int, relation(parent=serverpod_user_info)
  age: int
indexes:
  user_info_id_unique_idx:
    fields: userInfoId
    unique: true
```

It is now possible to make any other relation to our model as described in [one-to-one](https://docs.serverpod.dev/2.2.0/concepts/database/relations/one-to-one.md), [one-to-many](https://docs.serverpod.dev/2.2.0/concepts/database/relations/one-to-many.md), [many-to-many](https://docs.serverpod.dev/2.2.0/concepts/database/relations/many-to-many.md) and [self-relations](https://docs.serverpod.dev/2.2.0/concepts/database/relations/self-relations.md).

## Advanced example

A one-to-many relation with the "bridge" table could look like this.

```yaml
class: User
table: user
fields:
  userInfo: module:auth:UserInfo?, relation
  age: int
  company: Company?, relation(name=company_employee)
indexes:
  user_info_id_unique_idx:
    fields: userInfoId
    unique: true
  company_unique_idx:
    fields: companyId
    unique: true
```

```yaml
class: Company
table: company
fields:
  name: String
  employees: List<User>?, relation(name=company_employee)
```
