pipeline
{
    agent any
    stages
    {
        stage("Building - Install, Build, Change Directory, WAR File Creation")
	    {
	        steps
	        {
		        bat """npm install"""	
	            bat """ng build"""		
	            bat """ 
	            cd "dist"
	            cd "material"
	            jar -cvf material.war * 
	            """
            }
	    }
    }
}