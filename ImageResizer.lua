
local sizeType

if ngx.var.enforce == '!'
then
    sizeType = "!"
else
    sizeType = ""
end

local command = "convert  " ..ngx.var.request_filepath.." -resize ".. ngx.var.width .. "x" .. ngx.var.height .. ngx.var.enforce .. " +profile \"*\" " .. ngx.var.request_filepath .. "_" .. ngx.var.width .. "x" .. ngx.var.height .. ngx.var.enforce .. "." .. ngx.var.ext
if ngx.var.webp == ".webp" 
then
    command = command ..ngx.var.webp
end
-- ngx.say(command)
os.execute(command)
ngx.exec(ngx.var.request_uri)

