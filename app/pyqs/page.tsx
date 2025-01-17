import axios from "axios";
import Pdf from "../my_components/pdf";


interface Allpyqs {
  pyqname: string;
  pyq_id: number;
}

export default async function page() {
  try {
    const response = await axios.get<{ allpyqs: Allpyqs[] }>(
      "https://iitkirba-api.vercel.app/api/pyq/"
    );
    const pyqs = response.data.allpyqs;
    

    return (
      <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-secondary dark:bg-zinc-950 mt-14">
        <div className="w-[90vw] min-h-screen ">
          <h1 className="pl-4 py-10 text-3xl"> All Previous Year Questions</h1>
          <div className="flex flex-wrap gap-2">
            {pyqs.map((pyq) => (
              <Pdf key={pyq.pyq_id} notes={false} pyqid={pyq.pyq_id} pyqname={pyq.pyqname} links={""} />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    <div className="h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950">
      <h1 className="text-3xl text-center">Oops! Something went wrong</h1>
    </div>;
  }
}
