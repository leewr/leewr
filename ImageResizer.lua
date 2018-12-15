
local sizeType
local command
if ngx.var.enforce == 'f'
then
    command = "convert "..ngx.var.request_filepath.." -resize "..ngx.var.width.."x"..ngx.var.height.."^ -gravity center -extent ".. ngx.var.width .. "x" .. ngx.var.height .." "..ngx.var.request_filepath.."_"..ngx.var.width.."x"..ngx.var.height..ngx.var.enforce.."."..ngx.var.ext
    sizeType = "f"
elseif ngx.var.noresize == {} and ngx.var.webp == ".webp"
then
    command = "convert " ..ngx.var.request_filepath.." "..ngx.var.request_filepath .. ngx.var.webp .."ssss"
else
    command = "convert " ..ngx.var.request_filepath.." -resize ".. ngx.var.width .. "x" .. ngx.var.height .. " +profile \"*\" " .. ngx.var.request_filepath .. "_" .. ngx.var.width .. "x" .. ngx.var.height .. ngx.var.enforce .. "." .. ngx.var.ext
    sizeType = ""
end

-- local command = "convert  " ..ngx.var.request_filepath.." -resize ".. ngx.var.width .. "x" .. ngx.var.height .. ngx.var.enforce .. " +profile \"*\" " .. ngx.var.request_filepath .. "_" .. ngx.var.width .. "x" .. ngx.var.height .. ngx.var.enforce .. "." .. ngx.var.ext
if ngx.var.webp == ".webp" and ngx.var.noresize ~= ""
then
    command = command ..ngx.var.webp
end
ngx.say(ngx.var.noresize)
--os.execute(command)
--ngx.exec(ngx.var.request_uri)

