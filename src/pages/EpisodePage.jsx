import DOMPurify from "dompurify";

const EpisodePage = () => {
  const rawHtml = "<b>Prueba de texto en negritas.</b> \n <img src='https://picsum.photos/200' /> \n Lorem ipsun bla bla bla...";
  const cleanHtml = DOMPurify.sanitize(rawHtml);

  return (
    <section className="flex flex-col shadow-lg border rounded-sm p-5 bg-white">
      {/* Episode name */}
      <h1 className="capitalize text-xl font-bold mb-2">Episode title</h1>
      {/* Description  */}
      <div className="italic" dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      {/* Audio player  */}
      <div>
        <audio className="w-full mt-10 rounded-md h-7" src="" controls></audio>
      </div>
    </section>
  )
}

export default EpisodePage