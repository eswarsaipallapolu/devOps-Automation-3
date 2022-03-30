pipeline
{
    agent any
    stages
    {
		stage("Git Clone - Getting Data Source") 
		{
            steps 
			{
                checkout scm
            }
		}
        stage("Building - Install, Build, Change Directory, WAR File Creation")
	    {
	        steps
	        {
		        sh """npm install"""	
	            sh """ng build"""		
	            sh """ 
	            cd "dist"
	            cd "material"
	            jar -cvf master_material.war * 
	            """
	        }
	    }
		stage("Testing - Path Checking, Folder and Files Creation Check, Display Structure Tree")
	    {
	        steps
	        {
				//This is for Master Branch
				sh """
				cd /
	            cd /var/lib/jenkins/workspace/n_Multi_Branch_Pipeline_1_master/dist/material
	            tree
				"""
	        }
	    }
    }
}