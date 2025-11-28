import React from 'react'
import { useLocation, useNavigate } from 'react-router';

function Member() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const _page = params.get('page');
  const _limit = params.get('limit')

  // const [searchParams] = useSearchParams();
  // const _page = searchParams.get('page');
  // const _limit = searchParams.get('limit')

  const navigate = useNavigate();
  const [members, setMembers] = React.useState([]);
  // const [page, setPage] = React.useState(_page ? Number(_page) : 1);
  const [page, setPage] = React.useState(1);
  const [limit] = React.useState(_limit ? Number(_limit) : 2);

  React.useEffect(() => {
    setPage(_page ? Number(_page) : 1);
  }, [_page])

  console.log('member: ', {
    _page,
    page
  })

  React.useEffect(() => {
    async function fetchMember() {
      try { 
        const resp = await fetch(`https://tony-auth-express-vdee.vercel.app/api/member?page=${page}&limit=${limit}`)
        const data = await resp.json();
        setMembers(data.data);
      } catch(err) {
        console.log('error fetch member')
      }
    }
    fetchMember();
  }, [page, limit])

  function handleGoToDetail(id: string) {
    navigate(`/user/member/${id}`);
  }

  function handlePrevPage() {
    setPage(prev => {
      const newPage = prev - 1;
      navigate(`/user/member?page=${newPage}&limit=${limit}`);
      return newPage
    });
  }

  function handleNextPage() {
    setPage(prev => {
      const newPage = prev + 1;
      navigate(`/user/member?page=${newPage}&limit=${limit}`);
      return newPage
    });
  }

  return (
    <div>
      <h3>List Member</h3>

      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                First name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Email
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member: any) => (
              <tr key={member._id}  className="bg-neutral-primary border-b border-default">  
                <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">{member.firstName}</td>
                <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">{member.lastName}</td>
                <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">{member.email}</td>
                <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                  <button type='button' onClick={() => handleGoToDetail(member._id)}>View Detail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="button" onClick={handlePrevPage}>Prev</button>
        <span>{page}</span>
        <button type="button" onClick={handleNextPage}>Next</button>
      </div>
    </div>
  )
}

export default Member