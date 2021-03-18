## Installation / Setup
1. Install all depencies
    * `npm i`
2. Run Schema to create the database
    * `mysql -u {user} -p`
    * `{password}`
    * `source db/schema.sql`
3. Run Seeds to inject sample data
    * `node seeds/index`