local command = "/usr/local/GraphicsMagick/bin/gm convert   -auto-orient -strip " .. ngx.var.request_filepath .. " -resize " .. ngx.var.width .. "x" .. ngx.var.height .. " +profile \"*\" " .. ngx.var.request_filepath .. "_" .. ngx.var.width .. "x" .. ngx.var.height .. "." .. ngx.var.ext
os.execute(command)
ngx.exec(ngx.var.request_uri)