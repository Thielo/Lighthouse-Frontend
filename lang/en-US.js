export default {
  welcome: 'Welcome!',
  admin: {
    form: {
      back: 'Back',
      abort: 'Abort',
      delete: 'Delete now'
    },
    dashboard: {
      navigation: 'Dashboard',
      title: 'Admin Dashboard'
    },
    profiles: {
      fields: {
        id: 'ID',
        hash: 'Hash',
        firstname: 'Username',
        lastname: 'E-Mail Address',
        image: 'Avatar',
        description: 'Description'
      }
    },
    users: {
      navigation: 'Users',
      list: {
        navigation: 'All Users',
        title: 'All Users'
      },
      fields: {
        id: 'ID',
        hash: 'Hash',
        username: 'Username',
        email: 'E-Mail Address',
        password: 'Password',
        created: 'Creation Date'
      },
      delete: {
        title: 'Delete User "{user}"',
        message: 'Are you sure that user {user} should be deleted?<br />Since this system uses "soft deletes" the user will still be present in the database.'
      },
      update: {
        title: 'Update User "{user}"',
        form: {
          username: 'Username',
          email: 'E-Mail Address',
          update: 'Update User'
        }
      },
      new: {
        navigation: 'Create User',
        title: 'Create New User',
        form: {
          username: 'Username',
          email: 'E-Mail Address',
          password: 'Password',
          password_confirm: 'Confirm Password',
          create: 'Create User'
        }
      }
    }
  }
}
