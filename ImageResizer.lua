
local command = "convert  " .. ngx.var.request_filepath .. " -resize " .. ngx.var.width .. "x" .. ngx.var.height .. " +profile \"*\" " .. ngx.var.request_filepath .. "_" .. ngx.var.width .. "x" .. ngx.var.height .. "." .. ngx.var.ext

if ngx.var.webp == ".webp" then
    command = command..ngx.var.webp
end
os.execute(command)
ngx.exec(ngx.var.request_uri)