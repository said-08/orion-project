import Image from "next/image";

export default function Card({
  title,
  content,
  image,
  firstText = true,
  className,
}) {
  return (
    <div
      className={`relative border border-blue-300 rounded-lg p-4 sm:p-6 shadow-lg bg-slate-100 bg-opacity-10 w-full flex flex-col md:flex-row items-center overflow-hidden ${className}`}
    >
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white rounded-full opacity-20"></div>
      <div className="absolute -bottom-10 -left-20 w-40 h-40 bg-blue-600 rounded-full opacity-20"></div>
      <div className="absolute top-5 -left-16 w-24 h-24 bg-gray-200 rounded-full opacity-15"></div>
      <div className="absolute top-1/3 -left-12 w-16 h-16 bg-blue-400 rounded-full opacity-10"></div>
      <div className="absolute bottom-1/3 -left-8 w-20 h-20 bg-slate-300 rounded-full opacity-10"></div>
      <div className="absolute bottom-5 left-5 w-28 h-28 bg-blue-700 rounded-full opacity-10"></div>

      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full opacity-40"></div>
      <div className="absolute -bottom-10 -right-20 w-40 h-40 bg-blue-600 rounded-full opacity-30"></div>
      <div className="absolute top-5 -right-16 w-24 h-24 bg-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 -right-12 w-16 h-16 bg-blue-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 -right-8 w-20 h-20 bg-slate-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-5 right-5 w-28 h-28 bg-blue-700 rounded-full opacity-30"></div>

      {image && (
        <div
          className={`w-full md:w-1/3 ${
            firstText ? "" : "order-last"
          } mb-4 md:mb-0 flex justify-center`}
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="rounded-md object-cover w-full max-w-xs sm:max-w-sm md:max-w-full transform hover:scale-105 transition duration-300 shadow-md"
          />
        </div>
      )}

      <div className="w-full md:w-2/3 px-4 sm:px-12 py-6 sm:py-8 z-10">
        <div className="flex items-center mb-4 sm:mb-6">
          <span className="text-blue-400 text-3xl sm:text-4xl mr-3 sm:mr-4">
            🌑
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
            {title}
          </h3>
        </div>
        <div className="text-base sm:text-lg md:text-xl font-light text-gray-100 leading-relaxed break-words">
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
}
