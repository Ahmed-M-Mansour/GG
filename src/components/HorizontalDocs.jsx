import React from "react";

function HorizontalDocs() {
  return (
    <section className="my-12">
      <div className="flex items-start">
        <ul
          className="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4"
          id="tabs-tabVertical"
          role="tablist"
        >
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-homeVertical"
              className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
        "
              id="tabs-home-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-homeVertical"
              role="tab"
              aria-controls="tabs-homeVertical"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-profileVertical"
              className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        "
              id="tabs-profile-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profileVertical"
              role="tab"
              aria-controls="tabs-profileVertical"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-messagesVertical"
              className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        "
              id="tabs-messages-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messagesVertical"
              role="tab"
              aria-controls="tabs-messagesVertical"
              aria-selected="false"
            >
              Messages
            </a>
          </li>
        </ul>
        <div className="tab-content m-12" id="tabs-tabContentVertical">
          <div
            className="tab-pane fade show active"
            id="tabs-homeVertical"
            role="tabpanel"
            aria-labelledby="tabs-home-tabVertical"
          >
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2  sm:grid-cols-1 gap-12 lg:px-12 ">
                <div className=" w-full justify-center items-center my-6">
                  <iframe
                    className="w-full aspect-video "
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4"
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>

                <div className="w-full justify-center items-center my-6">
                  <iframe
                    className="w-full"
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4 "
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>

                <div className="w-full justify-center items-center my-6">
                  <iframe
                    className="w-full  "
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4 "
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>

                <div className="w-full justify-center items-center my-6">
                  <iframe
                    className="w-full  "
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4 "
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="tabs-profileVertical"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical"
          >
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2  sm:grid-cols-1 gap-12 lg:px-12 ">
                <div className=" w-full justify-center items-center my-6">
                  <iframe
                    className="w-full aspect-video "
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4"
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>

                <div className="w-full justify-center items-center my-6">
                  <iframe
                    className="w-full"
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4 "
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>

                <div className="w-full justify-center items-center my-6">
                  <iframe
                    className="w-full  "
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4 "
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>

                <div className="w-full justify-center items-center my-6">
                  <iframe
                    className="w-full  "
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4 "
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="tabs-messagesVertical"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical"
          >
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2  sm:grid-cols-1 gap-12 lg:px-12 ">
                <div className=" w-full justify-center items-center my-6">
                  <iframe
                    className="w-full aspect-video "
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4"
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>

                <div className="w-full justify-center items-center my-6">
                  <iframe
                    className="w-full"
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4 "
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>

                <div className="w-full justify-center items-center my-6">
                  <iframe
                    className="w-full  "
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4 "
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>

                <div className="w-full justify-center items-center my-6">
                  <iframe
                    className="w-full  "
                    style={{ width: "100%", height: "100%" }}
                    src="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                  ></iframe>
                  <a
                    className="btn  my-4 "
                    href="https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf"
                    target="_blank"
                  >
                    Open PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalDocs;
