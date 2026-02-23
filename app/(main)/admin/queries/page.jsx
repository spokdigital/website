"use client";
import { useState, useEffect } from "react";
 
import React from "react";
import axios from "axios";
 
import { Trash, Check } from "lucide-react";
 
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
 
 

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const serverURL = "https://admin.yatriclubs.com/";
  const [querys, setQueries] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: 2,
    label: "All",
  });
  const options = [
    { value: 2, label: "All" },
    { value: 1, label: "Read" },
    { value: 0, label: "Unread" },
  ];
  const getQueries = () => {
    setIsLoading(true);
    axios.get(`${serverURL}sanctum/csrf-cookie`, { withCredentials: true });
    axios
      .get(`${serverURL}api/query`, { withCredentials: true })
      .then((res) => {
        setQueries(res.data);
        setStatus("success");
      })
      .catch((error) => {
        console.error(error);
        setStatus("failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getQueries();
  }, []);

  return (
    <div className="w-full">
      <div className="mt-8 w-full flex justify-between items-center">
        <p className="font-Satoshi font-medium">Total Queries</p>
     
        <div className="flex items-center gap-5">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
           
        </div>
      </div>
      <div className="mt-1 bg-slate-50 p-3 rounded-xl">
        {querys.length > 0 ? (
          <Queries
            searchTerm={searchTerm}
            serverURL={serverURL}
            querys={querys}
            setQueries={setQueries}
            selectedOption={selectedOption}
          />
        ) : (
          <p className="text-center font-Satoshi font-medium text-lg">
            No Queries Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;

const Queries = ({
  searchTerm,
  serverURL,
  querys,
  setQueries,
  selectedOption,
}) => {
  const [isQuerySubmitting, setIsQuerySubmitting] = useState(false);
  const [queryStatus, setQueryStatus] = useState(null);``
  const [submitId, setSubmitId] = useState(null);
  const filteredQueries = querys.filter((query) => {
    const matchesSearchTerm =
      query.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesReadStatus =
      selectedOption.label === "All" || selectedOption.value == query.is_read;

    return matchesSearchTerm && matchesReadStatus;
  });

  const updateQuery = (id) => {
    setSubmitId(id);
    setIsQuerySubmitting(true);
    axios.get(`${serverURL}sanctum/csrf-cookie`, { withCredentials: true });
    axios
      .post(
        `${serverURL}api/updateRead/${id}`,
        { checked: 1 },
        { withCredentials: true }
      )
      .then((res) => {
        setQueries((prevQueries) =>
          prevQueries.map((query) =>
            query.id === id ? { ...query, is_read: 1 } : query
          )
        );
        setQueryStatus("success");
      })
      .catch((error) => {
        setQueryStatus("failed");
      })
      .finally(() => {
        setIsQuerySubmitting(false);
      });
  };
  return (
    <>
      {/* Container to enable scrolling */}
      <div className="h-[80vh] overflow-auto relative">
        <Table className="min-w-full">
          <TableCaption>A list of your Queries.</TableCaption>
          <TableHeader className="sticky top-0 left-0 z-10">
            <TableRow className="bg-gray-200 hover:bg-gray-200">
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold rounded-l-xl pl-4">
                No.
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold">
                Name
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold">
                Email
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold">
                Company
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold">
                Contact
              </TableHead>
              <TableHead className="text-gray-900 text-lg font-Satoshi font-bold rounded-r-xl">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredQueries.map((query, index) => (
              <TableRow key={index} className="hover:bg-gray-100">
                <TableCell className="pl-4 py-3">{index + 1}</TableCell>
                <TableCell className="font-Satoshi font-medium text-lg py-3">
                  {query.name}
                </TableCell>
                <TableCell className="font-Satoshi font-medium py-3">
                  {query.email}
                </TableCell>
                <TableCell className="font-Satoshi font-medium py-3">
                  {query.company}
                </TableCell>
                <TableCell className="font-Satoshi font-medium py-3">
                  {query.mobile}
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="relative group cursor-pointer">
                      <p className="hidden group-hover:block w-auto text-nowrap z-[9999] bg-slate-500 shadow-lg text-gray-100 rounded-full px-4 py-1 absolute bottom-full left-1/2 -translate-x-1/2">
                        Mark as read
                      </p>
                      {isQuerySubmitting && submitId == index ? (
                        <div className="flex items-center gap-4">
                          <div role="status">
                            <svg
                              aria-hidden="true"
                              class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-sky-500"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                            <span className="sr-only">Loading...</span>
                          </div>
                          <FaCheck className="text-gray-500 text-xl relative" />
                        </div>
                      ) : (
                        <Check
                          onClick={() => updateQuery(query.id)}
                          className={` text-xl relative ${query.is_read ? "text-green-500" : "text-slate-900"}`}
                        />
                      )}
                    </div>
                    <div className="relative group cursor-pointer">
                      <p className="hidden group-hover:block w-auto text-nowrap z-[9999] bg-red-500 shadow-lg text-gray-100 rounded-full px-4 py-1 absolute bottom-full left-1/2 -translate-x-1/2">
                        Delete blog
                      </p>
                      <Trash className="text-red-500 text-xl relative" />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
