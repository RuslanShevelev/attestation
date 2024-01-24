import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TrackList from '../../components/traklist/Tracklist'
import { useGetAllUsersQuery } from '../../services/appService'
import { setCurrentPage } from '../../store/slices/tracksSlice'

function Main() {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetAllUsersQuery()
console.log(data);
  useEffect(() => {
    if (data) dispatch(setCurrentPage('Main'))
  }, [data])
  return <TrackList allTracks={data?.items} error={error} isLoading={isLoading} />
}

export default Main
