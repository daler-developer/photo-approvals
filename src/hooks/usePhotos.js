import { useDispatch, useSelector } from "react-redux"
import { photosActions, selectApprovedPhotos, selectPhotos, selectRejectedPhotos } from "../redux/reducers/photos"
import { useEffect, useMemo, useState } from "react"
import useAlert from '../hooks/useAlert'
import api from "../utils/api"
import { uiActions } from "../redux/reducers/ui"

const usePhotos = () => {
  const [photoPresented, setPhotoPresented] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const allPhotos = useSelector((state) => selectPhotos(state))
  const approvedPhotos = useSelector((state) => selectApprovedPhotos(state))
  const rejectedPhotos = useSelector((state) => selectRejectedPhotos(state))

  const alert = useAlert()

  const dispatch = useDispatch()

  const numApproved = useMemo(() => approvedPhotos.length, [approvedPhotos])
  const numRejected = useMemo(() => rejectedPhotos.length, [rejectedPhotos])

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
    // if user already approved of rejected current photo, not to do anything
    if (allPhotos.find((photo) => photo.id === photoPresented.id)) {
      return
    }

    dispatch(photosActions.addPhoto({ ...photoPresented, isApproved: true }))
  }

  const rejectPhotoPresented = () => {
    // if user already approved of rejected current photo, not to do anything
    if (allPhotos.find((photo) => photo.id === photoPresented.id)) {
      return
    }

    dispatch(photosActions.addPhoto({ ...photoPresented, isApproved: false }))
  }

  const viewPhoto = (photoId) => {
    dispatch(uiActions.setPhotoViewing_id(photoId))
  }

  const setPhotos = (photos) => {
    dispatch(photosActions.setPhotos(photos))
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
    isFetching,
    numRejected,
    viewPhoto,
    setPhotos
  }
}

export default usePhotos
