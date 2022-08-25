import { REPORTERS } from "../config";
import { LiqualityError } from "../liquality-error";
import { ReportConfig, ReportType } from "../types";
// import { reportToConsole } from "./console";
// import { reportToDiscord } from "./discord";
// import { reportToEmail } from "./email";

export function reportLiqError<SourceError>(error: LiqualityError<SourceError>, config: ReportConfig){
    const reportTypes = Object.keys(config) as Array<ReportType>;
    const validReportTypes = Object.values(ReportType);
    if(reportTypes.length === 0) return;
    reportTypes.forEach(reportType => {
        if(validReportTypes.find(validReportType => validReportType === reportType)) {
            REPORTERS[reportType](error);
        }
    })
}

// export {Reporters: {reportToConsole, reportToDiscord, reportToEmail}};