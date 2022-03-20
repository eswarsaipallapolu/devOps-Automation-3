pipeline
{
    agent any
    stages
    {
        stage("Building - Install, Build, Change Directory, WAR File Creation")
	    {
	        steps
	        {
		        sh """npm install"""	
	            sh """ng build"""		
	            sh """ 
	            cd "dist"
	            cd "material"
	            jar -cvf material.war * 
	            """
            }
	    }
    }
}