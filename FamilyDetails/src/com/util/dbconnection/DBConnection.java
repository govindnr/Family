package com.util.dbconnection;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

import org.apache.log4j.Logger;


public class DBConnection {

	public static final Logger logger = Logger.getLogger(DBConnection.class);
	public static Connection connection = null;
	
	public static Connection getConnection(){

		if(connection!=null){
			return connection;
		}else {

			try{
				logger.info("control enter to try block");
				InputStream fis = DBConnection.class.getClassLoader().getResourceAsStream("dbproperties.properties");
				//FileInputStream fis = new FileInputStream("dbproperties.properties");
				Properties props = new Properties();
				props.load(fis);
				
				String driverClassName = props.getProperty("driverclassname");
				String url = props.getProperty("url");
				String username = props.getProperty("username");
				String password = props.getProperty("password");
				
				Class.forName(driverClassName);
				connection = DriverManager.getConnection(url,username,password);
				logger.info("controle exit from console");
			}
			catch(Exception e){
				logger.error("ERROR ::::::::::::::::::::::::" +e);
			}
			return connection;
			
		}
		
	}
	
}
