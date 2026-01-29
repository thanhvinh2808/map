export default function GoogleMapPage() {
  const mapUrl = "https://www.google.com/maps/d/u/0/embed?mid=1HGp4MI2XWv5hyN8XCnY6vtSdhKM1jeY&ll=10.845539237349918%2C106.78315036018789&z=17";

  return (
    <div className="fixed inset-0 bg-gray-100">
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
  );
}
