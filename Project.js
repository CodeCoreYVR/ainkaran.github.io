class Project {
  constructor(    
    projectInfo,
    projectName,
    projectNum,    
    startDate,
    endDate,
    status,
    dateAcquired,
    image
  ) {
    this.projectInfo = projectInfo;
    this.projectName = projectName;
    this.projectNum = projectNum;
    this.projectLength = {
      start: startDate,
      end: endDate,
    };
    this.status = status;
    this.dateAcquired = dateAcquired;
    this.image = image;
  }
  toggleStatus(projectStatus) {
    this.status = projectStatus;
  } 
  projectAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600));
    return daysSinceAcquired;
  }
}

export default Project;
