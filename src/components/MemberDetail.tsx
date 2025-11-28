import React from 'react';
import { useParams } from 'react-router'

function MemberDetail() {
  const { memberId } = useParams();

  const [member, setMember] = React.useState<any>(null);
  
  React.useEffect(() => {
    if (!memberId) return;

    async function fetchMember() {
      try { 
        const resp = await fetch(`https://tony-auth-express-vdee.vercel.app/api/member/${memberId}`)
        const data = await resp.json();
        setMember(data.data);
      } catch(err) {
        console.log('error fetch member')
      }
    }
    fetchMember();
  }, [memberId])

  return (
    <div>
      First Name: {member?.firstName} <br />
      Last Name: {member?.lastName}
    </div>
  )
}

export default MemberDetail