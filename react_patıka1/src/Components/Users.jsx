import PropTypes from 'prop-types';

function Users({ name, id, surname, isLogged, friends, address }) {
    if (!isLogged) {
        return <h3>User not found </h3>
    }

    return (
        <>
            <h3> {isLogged ?
                <>
                    <p>Name Surname</p>
                    <p>{name} {surname} {id}</p>
                    <p></p>
                </>
                :
                "User Not Found ."}
            </h3>

            {address.city} {address.no}
            <hr />

            {friends ?
                friends.map((friend, id) => (
                    <div key={id}> {id} - {friend.name} {friend.surname} {friend.id} </div>
                )) : null
            }

        </>
    )
}

Users.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    surname: PropTypes.string.isRequired,
    isLogged: PropTypes.bool.isRequired,
    friends: PropTypes.arrayOf,

    address: PropTypes.shape({
        city: PropTypes.string,
        no: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
};



export default Users;
