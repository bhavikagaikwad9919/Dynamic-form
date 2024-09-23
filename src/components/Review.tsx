import { useLocation } from "react-router-dom";

const Review = () => {
  let location = useLocation();

  const data = location.state != null ? location.state.values : [];

  const formatDate = (date:any) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US");
    return formattedDate;
  };

  return (
    <div>
      {(() => {
        if (data.length != 0) {
          return (
            <>
              <div className="review">
              <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Client Number:</span>
                  <span className="data">{data.clientNum}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Matter Number:</span>
                  <span className="data">{data.matterNum}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Matter Name:</span>
                  <span className="data">{data.matterName}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Date Field:</span>
                  <span className="data">{formatDate(data.dateFiled)}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Date Served:</span>
                  <span className="data">{formatDate(data.dateServed)}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Full name:</span>
                  <span className="data">{data.name}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Email:</span>
                  <span className="data">{data.email}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">House type:</span>
                  <span className="data">{data.type}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Status:</span>
                  <span className="data">{data.applicable}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Move choice:</span>
                  <span className="data">{data.consideration}</span>
                </div>
                <div className="flex flex-row gap-4 mb-3">
                  <span className="text">Note:</span>
                  <span className="data">{data.reason}</span>
                </div>
              </div>
              ;
            </>
          );
        } else {
          return <div className="no-data text-zinc-500">No data found</div>;
        }
      })()}
    </div>
  );
};
export default Review;
