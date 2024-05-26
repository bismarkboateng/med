import { ClipLoader } from "react-spinners";


export default function Loader({ isLoading, color }: { isLoading: boolean, color?: string }) {
  return (
    <ClipLoader
     color={color || "white"}
     size={20}
     loading={isLoading}
    />
  )
}
