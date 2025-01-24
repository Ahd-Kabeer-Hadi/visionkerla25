// lib/rateLimiter.ts
const rateLimit = (limit: number, windowMs: number) => {
    const requests: Record<string, { count: number; startTime: number }> = {};
  
    return (ip: string) => {
      const currentTime = Date.now();
      const requestLog = requests[ip];
  
      if (!requestLog) {
        // Initialize request log for new IP
        requests[ip] = { count: 1, startTime: currentTime };
        return true;
      }
  
      const timeElapsed = currentTime - requestLog.startTime;
  
      if (timeElapsed > windowMs) {
        // Reset count and timer after windowMs
        requests[ip] = { count: 1, startTime: currentTime };
        return true;
      }
  
      if (requestLog.count < limit) {
        // Increment count if within limit
        requestLog.count += 1;
        return true;
      }
  
      // Rate limit exceeded
      return false;
    };
  };
  
  export default rateLimit;
  