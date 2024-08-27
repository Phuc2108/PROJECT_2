import {REVIEWS} from '../constants';

export default function Review() {
  return (

    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="reviews">
      {/** */}
    <div className="my-20">
      {/** */}
     <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">レビュー</h2>
      {/** */}
      <p className="max-w-2xl text-lg mb-12 text-center mx-auto">{REVIEWS.text}</p>
      {/** */}
      <div className="flex flex-wrap justify-center">
        {/** */}
        {REVIEWS.reviews.map((view, index) => (
      <div key={index} className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-10 mx-2 mx-w-xs">
      <p className="mb-4">{view.review}</p>
        <div className="flex items-center mt-4">
        <img src={view.image} alt={view.name} className="w-12 h-12 rounded-full mr-4"/>
          <div >
          <p className="text-sm font-bold">{view.name}</p>
            <p className="text-sm text-neutral-500">{view.title}</p>
          </div>
        </div>
      </div>
        ))}
        {/** */}
      </div>
    </div>
    </section>
  )}