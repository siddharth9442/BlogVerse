import React from 'react'
import { Container, Profile as ProfileComponent} from '../components'

function Profile() {
  return (
    <div>
        <Container>
            <div>
                <ProfileComponent />
            </div>
        </Container>
    </div>
  )
}

export default Profile