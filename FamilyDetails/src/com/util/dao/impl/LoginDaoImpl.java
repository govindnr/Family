package com.util.dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.simple.JSONObject;

import com.util.dao.LoginDao;
import com.util.dbconnection.DBConnection;
import com.util.dto.UserDetails;


public class LoginDaoImpl{

	public static String addNewUser(UserDetails ud) {
		JSONObject obj = new JSONObject();
		try{
			Connection con = DBConnection.getConnection();
			Statement stmt = con.createStatement();
			String isNameAlreadyExist = "select username from userdetails where username="+"'"+ud.getUserName()+"'";
			ResultSet  rs = stmt.executeQuery(isNameAlreadyExist);
			if(rs.next()){
					obj.put("status", "exists");
			}
			else{
				String sql = "insert into userdetails "+
					"values("+ "'"+ud.getUserName()+"'"+","+"'"+ud.getPassword()+"'"+","+"'"+ud.getLname()+"'"+","+"'"+ud.getFname()+"'"+","+"'"+ud.getFamilyname()+"'"+","
							+ ""+"'"+ud.getMno()+"'"+","+"'"+ud.getEmailid()+"'"+")";
				stmt = con.createStatement();	
				stmt.execute(sql);
				obj.put("status", true);
			}
		}catch(Exception e){
			System.out.println(e);
			obj.put("status", false);
		}
		return obj.toString();
	}

	/*@Override
	public String showusers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void Login() {
		// TODO Auto-generated method stub
		
	}*/

}
