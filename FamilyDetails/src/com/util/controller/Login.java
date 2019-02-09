package com.util.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.dao.impl.LoginDaoImpl;
import com.util.dto.UserDetails;

public class Login extends HttpServlet {
	

	 protected void doPost(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
	 {
	 PrintWriter pw=res.getWriter();
	 res.setContentType("text/html");
	 	
	 String action=req.getParameter("action");
	 
	 
	 if(action.equals("addnewuser")) 
	 {
		 
		 UserDetails ud = new UserDetails();
		 ud.setUserName(req.getParameter("fname"));
		 ud.setPassword(req.getParameter("password"));
		 ud.setUserName(req.getParameter("lname"));
		 ud.setPassword(req.getParameter("mno"));
		 ud.setUserName(req.getParameter("username"));
		 ud.setPassword(req.getParameter("familyname"));
		 ud.setPassword(req.getParameter("emailid"));
		 String result = LoginDaoImpl.addNewUser(ud);
		 res.getWriter().write(result);
		 
	 }else if (action.equals("login")){
		 
	 }else if (action.equals("showusers")){
		
	 }else if (action.equals("deleteuser")){
		 
	 }else if (action.equals("updateuser")){
		 
	 }
		 pw.close();
	 }
}
