import { useState } from "react";
import { Error } from "./Error";
import { Modal } from "./Modal";

export const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);

  // validation
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if ([name, email, phone, date].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    setName("");
    setEmail("");
    setPhone("");
    setDate("");
  };

  return (
    <>
      {/* list */}
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        {error && <Error />}
        <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 uppercase">
          <div className="mb-5">
            <b> Name:</b> {name}
          </div>
          <div className="mb-5">
            <b> Phone:</b> {phone}
          </div>
          <div className="mb-5">
            <b> Email:</b> {email}
          </div>
          <div className="mb-5">
            <b>Birthday:</b> {date}
          </div>
        </div>
      </div>
      {/* form */}
      <div className="block p-6 rounded-lg shadow-lg max-w-md bg-silver  md:w-1/2 lg:w-2/5 mx-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-input px-4 py-3 rounded-full w-full"
              placeholder="Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="tel"
              className="form-input px-4 py-3 rounded-full w-full"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-input px-4 py-3 rounded-full w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <div
              className="datepicker   relative form-floating mb-3 xl:w-96 "
              data-mdb-toggle-button="false"
            >
              <input
                type="date"
                className="form-input px-4 py-3 rounded-full w-full"
                placeholder="Pick a date"
                data-mdb-toggle="datepicker"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center ">
            <Modal />
          </div>
        </form>
      </div>
    </>
  );
};
