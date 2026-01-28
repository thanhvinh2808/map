export default function GoogleMapPage() {
  const mapUrl = "https://www.google.com/maps/d/u/0/embed?mid=1HGp4MI2XWv5hyN8XCnY6vtSdhKM1jeY&ll=10.845539237349918%2C106.78315036018789&z=17";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Bản đồ Google My Maps</h1>
        <div className="relative w-full h-[600px] rounded-md overflow-hidden border border-gray-300">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
        {/* <div className="mt-4 text-sm text-gray-500 text-center">
          Đang hiển thị bản đồ từ link Google My Maps của bạn.
        </div> */}
      </div>
    </div>
  );
}
