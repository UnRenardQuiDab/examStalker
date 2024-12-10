import React, { createContext, useContext, useEffect, useState } from 'react';


const ExamsContext = createContext();

export const ExamsProvider = ({ children }) => {

  const [exams, setExams] = useState([]);
  const [apiUrl, setApiUrl] = useState(localStorage.getItem("ApiUrl") || "http://localhost:3000");
  const [examToStalk, setExamToStalk] = useState(localStorage.getItem("ExamToStalk") || null);
  const [ws, setWs] = useState(null);

  const fetchExams = async () => {
    try {
      const response = await fetch(`${apiUrl}/exams`);
      const data = await response.json();
      setExams(data);
      if (data.length > 0 && !examToStalk)
        updateExamToStalk(data[0]?.id);
    }
    catch (error) {
      setExams([]);
      setExamToStalk(null);
    }
  };

  const updateApiUrl = (newApiUrl) => {
		setApiUrl(newApiUrl)
		localStorage.setItem("ApiUrl", newApiUrl)
	}

  const updateExamToStalk = (examId) => {
    setExamToStalk(examId);
    localStorage.setItem("ExamToStalk", examId);
    console.log("examId", examId);
  };


  useEffect(() => {
    fetchExams();
  // eslint-disable-next-line
  }, [apiUrl]);

  useEffect(() => {
    if (apiUrl.startsWith("https")) {
      setWs(`ws://${apiUrl.substring(8)}/exams/${examToStalk}/notify`);
    }
    else {
      setWs(`ws://${apiUrl.substring(7)}/exams/${examToStalk}/notify`);
    }
  }, [apiUrl, examToStalk]);

  

  return (
    <ExamsContext.Provider value={{ exams, apiUrl, updateApiUrl, examToStalk, updateExamToStalk, ws }}>
      {children}
    </ExamsContext.Provider>
  );
};

export const useExams = () => {
  return useContext(ExamsContext);
};