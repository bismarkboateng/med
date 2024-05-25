import { ClipLoader } from "react-spinners";


export default function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <ClipLoader
     color="white"
     size={20}
     loading={isLoading}
    />
  )
}
