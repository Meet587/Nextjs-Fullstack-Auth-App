const UserProfilePage = ({ params }: any) => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center py-2'>
            <h1>Profile</h1>
            <hr />
            <p>Profile Page {params.id}</p>
        </div>
    )
}

export default UserProfilePage