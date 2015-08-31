var N = parseInt(readline());
var mass = new Array();
mass[0] = new Array();
data = readline().split(' ');
var i=0;
var isStop = 0;
for (x=0;x<N;x++){
	mass[0][x]=parseInt(data[x]);
}
while (isStop<N){
	isStop=0;
	mass[i+1] = new Array();
	//write(i + " - " + isStop + " : ")
	for (x=0;x<N;x++){
		//write(mass[i][x] + " ");
		if ((x==0)||(x==N-1)){
			mass[i+1][x] = 0;
		} else {
			if ((x<N-1)&&(x>0)){
				if((mass[i][x-1]>mass[i][x+1])){
					if (mass[i][x]>mass[i][x+1]){
						mass[i+1][x] = mass[i][x+1];
					}
				} else {
					if (mass[i][x]>mass[i][x-1]){
						mass[i+1][x] = mass[i][x-1];
					}
				}
				if ((mass[i][x]==mass[i][x+1])&&(mass[i][x]==mass[i][x-1])&&(mass[i][x]>1)){
					mass[i+1][x] = mass[i][x]-1;
				}
				if ((mass[i][x]==mass[i][x+1])&&(mass[i][x]==mass[i][x-1])&&(mass[i][x]==1)){
					mass[i+1][x] = 0;
				}
			}
		}
		if ((mass[i][x]==0)||(mass[i][x]==undefined)){
			isStop++;
		}
	}
	//write(": "+ i);
	//write("\n");
	i++;
}

write(i-1);
