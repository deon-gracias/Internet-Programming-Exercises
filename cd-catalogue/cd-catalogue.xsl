<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">

        <h2 class="text-2xl text-center font-bold mb-4">My Playlist</h2>

        <table class="w-full table-fixed">
            <thead>
                <tr>
                    <th class="p-2 bg-slate-100 text-right border-2 border-slate-400">Title</th>
                    <th class="p-2 bg-slate-100 text-left border-2 border-slate-400">Artist</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="CATALOG/CD">
                    <tr>
                        <td class="p-2 border border-r-2 border-slate-400 text-right">
                            <xsl:value-of select="TITLE" />
                        </td>
                        <td class="p-2 border border-l-2 border-slate-400">
                            <xsl:value-of select="ARTIST" />
                        </td>
                    </tr>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>

</xsl:stylesheet>