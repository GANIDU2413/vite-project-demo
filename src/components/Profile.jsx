function Profile({userName,city,mail,isActive}) {
    return ( 
        <>
            <p style={{color:isActive?'green':'red'}}>{"User name :"+userName}</p>
            <p>{"City : "+city}</p>
            <p>{"E-Mail : "+mail}</p>
        </>
     );
}

export default Profile;