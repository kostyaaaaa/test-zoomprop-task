// settings/users requires this component

interface IUserList {
  userModal: (user: any) => void
  users: any
}

const UserList = (props: IUserList) => {
  console.log(props)
  return <div></div>
}

export default UserList
