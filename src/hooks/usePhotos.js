import { useDispatch, useSelector } from "react-redux"
import { phototsActions, selectApprovedPhotos, selectPhotos, selectRejectedPhotos } from "../redux/reducers/photos"
import { useEffect, useMemo, useState } from "react"
import useAlert from '../hooks/useAlert'
import api from "../utils/api"

const usePhotos = () => {
  const [photoPresented, setPhotoPresented] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const allPhotos = useSelector((state) => selectPhotos(state))
  const approvedPhotos = useSelector((state) => selectApprovedPhotos(state))
  const rejectedPhotos = useSelector((state) => selectRejectedPhotos(state))

  const alert = useAlert()

  useEffect(() => {
    // updateStorage()
  }, [allPhotos])

  const dispatch = useDispatch()

  const numApproved = useMemo(() => approvedPhotos.length, [approvedPhotos])

  const presentNewPhoto = async () => {
    try {
      setIsFetching(true)

      const { data } = await api.getRandomPhoto()

      if (allPhotos.find(post => post.id === data.id)) {
        presentNewPhoto()
      }

      setPhotoPresented({
        id: data.id,
        url: data.urls.small
      })
    } catch (e) {
      alert.error('Something went wrong!')
    } finally {
      setIsFetching(false)
    }
  }

  const approvePhotoPresented = () => {
    dispatch(phototsActions.addPhoto({ ...photoPresented, isApproved: true }))
  }

  const rejectPhotoPresented = () => {
    dispatch(phototsActions.addPhoto({ ...photoPresented, isApproved: false }))
  }

  const updateStorage = () => {
    localStorage.setItem('photos', JSON.stringify(allPhotos))
  }

  return {
    allPhotos,
    approvedPhotos,
    rejectedPhotos,
    photoPresented,
    presentNewPhoto,
    numApproved,
    approvePhotoPresented,
    rejectPhotoPresented,
    isFetching
  }
}

export default usePhotos
