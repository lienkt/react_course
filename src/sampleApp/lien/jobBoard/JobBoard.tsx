import React from "react"

interface IJob {
  "by": string,
  "id": number,
  "score": number,
  "time": number,
  "title": string,
  "type": string, 
  "url": string,
}

function JobBoard() {
  // TODO: get list ids of job stories
  const [ids, setIds] = React.useState([]);
  const [jobs, setJobs] = React.useState<IJob[]>([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    async function getJobIds() {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
      const data = await res.json();
      setIds(data);
    }

    getJobIds();
  }, []);

  // get list jobs
  React.useEffect(() => {
    if(ids.length === 0) return;

    // TODO: get 6 items 
    const start = page * 6 - 6;
    const end = page * 6 - 1
    const jobIds = ids.slice(start, end);

    // TODO request api get data for each id
    const fetchJob = jobIds.map(async id => {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      const data = await res.json();
      return data
    })
    Promise.all([...fetchJob]).then(res => {
      setJobs(prevState => [...prevState, ...res])
    })
  }, [ids, page])

  function loadMore() {
    setPage(prevState => prevState + 1)
  }

  return (
    <div>
      <h1>JobBoard</h1>

      {jobs.map(item => (
        <div key={item.id}>
          Title: {item.title}
        </div>
      ))}

      <button type="button" onClick={loadMore}>Load more</button>
    </div>
  )
}

export default JobBoard