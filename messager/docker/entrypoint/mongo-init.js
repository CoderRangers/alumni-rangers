db.createUser({
    user: 'messager_db_admin',
    pwd: 'admin',
    roles: [
      {
        role: 'dbOwner',
        db: 'messager_db_admin',
      },
    ],
    mechanisms: ['SCRAM-SHA-256'],
  });
  