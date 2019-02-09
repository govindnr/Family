package com.util.dao;

import com.util.dto.UserDetails;

public interface LoginDao {
	
	public int addNewUser(UserDetails ud) ;
	
	public String showusers();
	
	public void Login();

}
